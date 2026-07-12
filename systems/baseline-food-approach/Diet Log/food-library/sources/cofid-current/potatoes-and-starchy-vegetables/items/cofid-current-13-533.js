/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Frozen, including waffles, smiley faces and letters",
  "id": "cofid-current-13-533",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato products, shaped, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 28.1,
    "energy_kcal": 190.0,
    "fat_g": 8.3,
    "fibre_g": 2.7,
    "folate_ug": 17.0,
    "iron_mg": 0.74,
    "magnesium_mg": 22.0,
    "omega3_g": 0.18,
    "phosphorus_mg": 55.0,
    "potassium_mg": 423.0,
    "protein_g": 2.5,
    "salt_g": 0.635,
    "sat_fat_g": 0.89,
    "sodium_mg": 254.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 44.0,
    "vitamin_e_mg": 2.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-533",
  "state": "Baked",
  "subcategory": "DA",
  "tags": [
    "baked",
    "da",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
