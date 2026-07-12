/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products",
  "id": "cofid-current-12-384",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream bars/choc ices, non-dairy, with chocolate flavoured coating",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 23.2,
    "energy_kcal": 295.0,
    "fat_g": 21.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.27,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 189.0,
    "protein_g": 3.2,
    "salt_g": 0.175,
    "sat_fat_g": 18.4,
    "sodium_mg": 70.0,
    "sugar_g": 20.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-384",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "beverages",
    "bp",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
