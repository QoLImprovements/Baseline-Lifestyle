/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "Tough stalks removed",
  "id": "cofid-current-13-844",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Parsley, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 200.0,
    "carbs_g": 2.7,
    "energy_kcal": 34.0,
    "fat_g": 1.3,
    "fibre_g": 0.0,
    "folate_ug": 170.0,
    "iron_mg": 7.7,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 760.0,
    "protein_g": 3.0,
    "salt_g": 0.0825,
    "sat_fat_g": 0.0,
    "sodium_mg": 33.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 673.0,
    "vitamin_c_mg": 190.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 548.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-844",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
