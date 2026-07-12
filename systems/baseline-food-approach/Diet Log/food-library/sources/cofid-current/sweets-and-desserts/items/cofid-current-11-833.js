/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "7 samples, 2 products, including ginger and golden syrup",
  "id": "cofid-current-11-833",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, loaf, retail",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 56.2,
    "energy_kcal": 323.0,
    "fat_g": 11.0,
    "fibre_g": 1.4,
    "folate_ug": 6.0,
    "iron_mg": 0.52,
    "magnesium_mg": 8.0,
    "omega3_g": 0.41,
    "phosphorus_mg": 46.0,
    "potassium_mg": 154.0,
    "protein_g": 3.3,
    "salt_g": 0.915,
    "sat_fat_g": 3.16,
    "sodium_mg": 366.0,
    "sugar_g": 33.5,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-833",
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
