/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "20 samples of different brands, plain and flavoured, not baked",
  "id": "cofid-current-17-693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato crisps, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 63.5,
    "energy_kcal": 458.0,
    "fat_g": 21.5,
    "fibre_g": 0.0,
    "folate_ug": 48.0,
    "iron_mg": 1.8,
    "magnesium_mg": 48.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 130.0,
    "potassium_mg": 1020.0,
    "protein_g": 6.6,
    "salt_g": 1.825,
    "sat_fat_g": 1.85,
    "sodium_mg": 730.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 3.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-693",
  "state": "Unspecified",
  "subcategory": "SN",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "sn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
