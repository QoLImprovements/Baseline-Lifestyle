/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Including Munch Bunch, Petits Filous, Muller Little Stars and other/own brands",
  "id": "cofid-current-12-534",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fromage frais, fruit, children's, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 13.2,
    "energy_kcal": 99.0,
    "fat_g": 2.9,
    "fibre_g": 0.2,
    "folate_ug": 15.0,
    "iron_mg": 0.06,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 123.0,
    "potassium_mg": 143.0,
    "protein_g": 5.8,
    "salt_g": 0.15,
    "sat_fat_g": 1.9,
    "sodium_mg": 60.0,
    "sugar_g": 11.8,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-534",
  "state": "Unspecified",
  "subcategory": "BNS",
  "tags": [
    "bns",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
