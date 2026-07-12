/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "20 samples, 7 brands; mixed plain and flavoured",
  "id": "cofid-old-17-135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato crisps, jacket",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 51.3,
    "energy_kcal": 510.0,
    "fat_g": 32.4,
    "fibre_g": 0.0,
    "folate_ug": 70.0,
    "iron_mg": 2.0,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 1290.0,
    "protein_g": 6.4,
    "salt_g": 1.3,
    "sat_fat_g": 13.3,
    "sodium_mg": 520.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 19.0,
    "vitamin_e_mg": 5.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-135",
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
