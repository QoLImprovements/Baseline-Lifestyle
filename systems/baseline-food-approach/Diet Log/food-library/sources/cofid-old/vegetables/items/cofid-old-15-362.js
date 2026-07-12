/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "4 samples, 2 brands including cordon bleu and traditional style",
  "id": "cofid-old-15-362",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegetable kiev, baked",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 17.6,
    "energy_kcal": 229.0,
    "fat_g": 13.7,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.5,
    "magnesium_mg": 22.0,
    "omega3_g": 0.27,
    "phosphorus_mg": 115.0,
    "potassium_mg": 209.0,
    "protein_g": 9.9,
    "salt_g": 1.3025,
    "sat_fat_g": 4.95,
    "sodium_mg": 521.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-362",
  "state": "Baked",
  "subcategory": "DR",
  "tags": [
    "baked",
    "dr",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
