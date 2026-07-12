/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 cans (Fussells)",
  "id": "cofid-old-12-028",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, condensed, skimmed, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 330.0,
    "carbs_g": 60.0,
    "energy_kcal": 267.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.33,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 450.0,
    "protein_g": 10.0,
    "salt_g": 0.375,
    "sat_fat_g": 0.1,
    "sodium_mg": 150.0,
    "sugar_g": 60.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-028",
  "state": "Unspecified",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
