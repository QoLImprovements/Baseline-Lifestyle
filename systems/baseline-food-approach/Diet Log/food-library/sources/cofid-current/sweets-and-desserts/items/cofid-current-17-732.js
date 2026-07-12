/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "11 samples, 6 brands, assorted flavours, including Ovaltine Options, Cadbury Highlights and own brands",
  "id": "cofid-current-17-732",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Instant drinks powder, chocolate, low calorie",
  "nutritionPerBasis": {
    "calcium_mg": 411.0,
    "carbs_g": 52.0,
    "energy_kcal": 359.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 7.5,
    "magnesium_mg": 186.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 618.0,
    "potassium_mg": 1802.0,
    "protein_g": 16.0,
    "salt_g": 2.925,
    "sat_fat_g": 8.05,
    "sodium_mg": 1170.0,
    "sugar_g": 33.6,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-732",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "paa",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
