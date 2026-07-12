/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "18 samples, 8 brands, prawn and tuna toppings, includes thin base and deep pan",
  "id": "cofid-current-11-1011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pizza, fish topped, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 173.0,
    "carbs_g": 28.0,
    "energy_kcal": 226.0,
    "fat_g": 7.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.2,
    "magnesium_mg": 24.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 170.0,
    "potassium_mg": 179.0,
    "protein_g": 13.3,
    "salt_g": 1.0,
    "sat_fat_g": 3.24,
    "sodium_mg": 400.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1011",
  "state": "Unspecified",
  "subcategory": "AE",
  "tags": [
    "ae",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
