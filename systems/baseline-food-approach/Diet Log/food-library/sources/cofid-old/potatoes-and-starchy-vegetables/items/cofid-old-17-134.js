/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "20 samples, 3 brands; mixed plain and flavoured",
  "id": "cofid-old-17-134",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato crisps, crinkle cut",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 53.9,
    "energy_kcal": 547.0,
    "fat_g": 35.8,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 1.7,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 1040.0,
    "protein_g": 5.6,
    "salt_g": 1.925,
    "sat_fat_g": 14.6,
    "sodium_mg": 770.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-134",
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
