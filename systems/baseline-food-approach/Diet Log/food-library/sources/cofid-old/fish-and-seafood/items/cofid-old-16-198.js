/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands; whole contents, fillets",
  "id": "cofid-old-16-198",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mackerel, canned in tomato sauce, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 1.4,
    "energy_kcal": 206.0,
    "fat_g": 15.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.0,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 310.0,
    "protein_g": 16.4,
    "salt_g": 0.625,
    "sat_fat_g": 3.3,
    "sodium_mg": 250.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "16-198",
  "state": "Canned",
  "subcategory": "JC",
  "tags": [
    "canned",
    "fish-and-seafood",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
