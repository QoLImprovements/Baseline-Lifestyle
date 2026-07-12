/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "5 samples (Ambrosia)",
  "id": "cofid-old-12-193",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, drinking, UHT",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 13.1,
    "energy_kcal": 62.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.1,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 130.0,
    "protein_g": 3.1,
    "salt_g": 0.1175,
    "sat_fat_g": 0.0,
    "sodium_mg": 47.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-193",
  "state": "Unspecified",
  "subcategory": "BNS",
  "tags": [
    "bns",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
