/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 4 products, including standard and mini cakes",
  "id": "cofid-current-11-835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, battenberg, retail",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 65.9,
    "energy_kcal": 354.0,
    "fat_g": 9.9,
    "fibre_g": 1.5,
    "folate_ug": 8.0,
    "iron_mg": 0.58,
    "magnesium_mg": 18.0,
    "omega3_g": 0.44,
    "phosphorus_mg": 134.0,
    "potassium_mg": 174.0,
    "protein_g": 4.4,
    "salt_g": 0.3425,
    "sat_fat_g": 3.08,
    "sodium_mg": 137.0,
    "sugar_g": 56.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-835",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
