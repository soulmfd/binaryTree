/*
    для рисования
    */
class CyHelper {
    /*
        конструктор
        */
    constrictor(inVars) {
        console.log('CyHelper initialized');

        this.cy = inVars['cy'];
        this.tree = inVars['tree'];

        this.draw(this.tree.root);
    }

    // отрисовать ноду
    draw(n) {
        this.cy.add({
            group: 'nodes',
            data: { id: n.name, weight: n.value }
        });

        if(n.left) {
            console.log(`CyHelper drawing ${n.name}`);
            this.draw(n.left);

            cy.$(`#${n.left.name}`).position({
                x: cy.$(`#${n.name}`).position('x') - 50,
                y: cy.$(`#${n.name}`).position('y') + 50
            });

            this.cy.add({
                group: 'edges',
                data: {
                    id: `e${n.name}_${n.left.name}`,
                    source: n.name,
                    target: n.left.name
                }
            });
        }

        if(n.right) {
            this.draw(n.right);

            cy.$(`#${n.right.name}`).position({
                x: cy.$(`#${n.name}`).position('x') + 50,
                y: cy.$(`#${n.name}`).position('y') + 50
            });

            this.cy.add({
                group: 'edges',
                data: {
                    id: `e${n.name}_${n.right.name}`,
                    source: n.name,
                    target: n.right.name
                }
            });
        }
    }
}
