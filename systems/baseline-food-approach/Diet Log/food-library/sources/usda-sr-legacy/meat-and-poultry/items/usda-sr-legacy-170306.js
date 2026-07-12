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
  "id": "usda-sr-legacy-170306",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    },
    {
      "gramsPerUnit": 457.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    }
  ],
  "name": "Fast foods, submarine sandwich, sweet onion chicken teriyaki on white bread with lettuce, tomato and sweet onion sauce",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 22.5,
    "energy_kcal": 155.0,
    "fat_g": 2.37,
    "fibre_g": 1.2,
    "folate_ug": 58.0,
    "iron_mg": 1.52,
    "magnesium_mg": 23.0,
    "omega3_g": 0.066,
    "phosphorus_mg": 139.0,
    "potassium_mg": 285.0,
    "protein_g": 10.9,
    "salt_g": 0.7625,
    "sat_fat_g": 0.505,
    "sodium_mg": 305.0,
    "sugar_g": 6.06,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170306",
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
