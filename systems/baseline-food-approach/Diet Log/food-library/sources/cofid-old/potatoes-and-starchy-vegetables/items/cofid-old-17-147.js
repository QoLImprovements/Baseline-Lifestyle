/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "20 samples, 3 brands; assorted flavours e.g. Quavers, Snaps, Chinese style crackers",
  "id": "cofid-old-17-147",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Puffed potato products",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 56.2,
    "energy_kcal": 517.0,
    "fat_g": 33.0,
    "fibre_g": 0.0,
    "folate_ug": 34.0,
    "iron_mg": 1.0,
    "magnesium_mg": 14.0,
    "omega3_g": 0.91,
    "phosphorus_mg": 84.0,
    "potassium_mg": 190.0,
    "protein_g": 2.2,
    "salt_g": 3.7,
    "sat_fat_g": 9.7,
    "sodium_mg": 1480.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-147",
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
