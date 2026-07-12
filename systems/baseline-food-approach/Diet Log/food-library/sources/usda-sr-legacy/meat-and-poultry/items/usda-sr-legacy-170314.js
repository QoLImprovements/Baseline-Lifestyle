/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "6-inch-sub",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170314",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    },
    {
      "gramsPerUnit": 396.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    }
  ],
  "name": "SUBWAY, oven roasted chicken sub on white bread with lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 154.0,
    "carbs_g": 21.4,
    "energy_kcal": 657.0,
    "fat_g": 3.15,
    "fibre_g": 1.2,
    "folate_ug": 68.0,
    "iron_mg": 1.72,
    "magnesium_mg": 22.0,
    "omega3_g": 0.071,
    "phosphorus_mg": 145.0,
    "potassium_mg": 198.0,
    "protein_g": 10.8,
    "salt_g": 0.67,
    "sat_fat_g": 0.724,
    "sodium_mg": 268.0,
    "sugar_g": 2.99,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170314",
  "state": "Roasted",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
