/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products",
  "id": "cofid-current-11-737",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Muffins, American, chocolate, retail",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 49.5,
    "energy_kcal": 436.0,
    "fat_g": 25.4,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 3.02,
    "magnesium_mg": 34.0,
    "omega3_g": 1.92,
    "phosphorus_mg": 198.0,
    "potassium_mg": 248.0,
    "protein_g": 5.5,
    "salt_g": 0.99,
    "sat_fat_g": 4.83,
    "sodium_mg": 396.0,
    "sugar_g": 30.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-737",
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
