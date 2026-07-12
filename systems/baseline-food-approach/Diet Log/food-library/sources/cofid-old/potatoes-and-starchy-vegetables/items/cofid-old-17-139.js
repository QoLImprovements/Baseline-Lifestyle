/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "20 samples, 5 brands; mixed plain and flavoured",
  "id": "cofid-old-17-139",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato crisps, thick, crinkle-cut",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 55.9,
    "energy_kcal": 507.0,
    "fat_g": 30.3,
    "fibre_g": 0.0,
    "folate_ug": 47.0,
    "iron_mg": 1.5,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 920.0,
    "protein_g": 6.1,
    "salt_g": 1.85,
    "sat_fat_g": 12.4,
    "sodium_mg": 740.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 5.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-139",
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
