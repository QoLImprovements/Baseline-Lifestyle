/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "20 samples, 2 brands; mixed plain and flavoured",
  "id": "cofid-old-17-137",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato crisps, square",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 57.7,
    "energy_kcal": 433.0,
    "fat_g": 21.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.3,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 1310.0,
    "protein_g": 6.4,
    "salt_g": 3.675,
    "sat_fat_g": 8.7,
    "sodium_mg": 1470.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-137",
  "state": "Unspecified",
  "subcategory": "SNA",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "sna",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
