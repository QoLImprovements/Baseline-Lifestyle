/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including celebration cakes, tray bakes and layer cakes",
  "id": "cofid-current-11-830",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, chocolate, with filling and icing, retail",
  "nutritionPerBasis": {
    "calcium_mg": 144.0,
    "carbs_g": 48.6,
    "energy_kcal": 413.0,
    "fat_g": 23.7,
    "fibre_g": 2.9,
    "folate_ug": 13.0,
    "iron_mg": 3.06,
    "magnesium_mg": 39.0,
    "omega3_g": 0.88,
    "phosphorus_mg": 212.0,
    "potassium_mg": 340.0,
    "protein_g": 4.5,
    "salt_g": 0.6475,
    "sat_fat_g": 9.46,
    "sodium_mg": 259.0,
    "sugar_g": 36.6,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-830",
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
