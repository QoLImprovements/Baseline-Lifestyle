/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from manufacturers' proportions",
  "id": "cofid-current-16-087",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lemon sole, goujons, baked",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 14.7,
    "energy_kcal": 187.0,
    "fat_g": 14.6,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.9,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 230.0,
    "protein_g": 16.0,
    "salt_g": 0.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 200.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-087",
  "state": "Baked",
  "subcategory": "JA",
  "tags": [
    "baked",
    "fruit",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
