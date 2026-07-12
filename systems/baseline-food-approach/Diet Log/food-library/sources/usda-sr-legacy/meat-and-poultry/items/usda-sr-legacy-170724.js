/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "WENDY'S, Ultimate Chicken Grill Sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 18.9,
    "energy_kcal": 751.0,
    "fat_g": 5.0,
    "fibre_g": 1.1,
    "folate_ug": 0.0,
    "iron_mg": 1.55,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 168.0,
    "potassium_mg": 221.0,
    "protein_g": 14.7,
    "salt_g": 1.0675,
    "sat_fat_g": 1.03,
    "sodium_mg": 427.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 8.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170724",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
