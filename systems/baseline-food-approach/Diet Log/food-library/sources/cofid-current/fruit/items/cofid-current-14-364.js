/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 400g blackberries, 550g apples, 175g water",
  "id": "cofid-current-14-364",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Blackberry and apple, stewed without sugar",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 6.4,
    "energy_kcal": 28.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.31,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 103.0,
    "protein_g": 0.5,
    "salt_g": 0.005,
    "sat_fat_g": 0.03,
    "sodium_mg": 2.0,
    "sugar_g": 6.4,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-364",
  "state": "Unspecified",
  "subcategory": "F",
  "tags": [
    "f",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
