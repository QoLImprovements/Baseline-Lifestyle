/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173274",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, vanilla, light, soft-serve ice cream, with cone",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 26.4,
    "energy_kcal": 681.0,
    "fat_g": 4.86,
    "fibre_g": 0.1,
    "folate_ug": 13.0,
    "iron_mg": 0.35,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 193.0,
    "protein_g": 4.24,
    "salt_g": 0.2025,
    "sat_fat_g": 2.54,
    "sodium_mg": 81.0,
    "sugar_g": 19.5,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173274",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
