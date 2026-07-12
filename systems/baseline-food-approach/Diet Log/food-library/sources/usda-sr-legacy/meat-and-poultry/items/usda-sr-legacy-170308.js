/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "12-inch-sub",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170308",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 413.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    },
    {
      "gramsPerUnit": 207.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    }
  ],
  "name": "Fast foods, submarine sandwich, turkey, roast beef and ham on white bread with lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 153.0,
    "carbs_g": 20.4,
    "energy_kcal": 610.0,
    "fat_g": 2.42,
    "fibre_g": 1.4,
    "folate_ug": 65.0,
    "iron_mg": 1.93,
    "magnesium_mg": 22.0,
    "omega3_g": 0.072,
    "phosphorus_mg": 131.0,
    "potassium_mg": 265.0,
    "protein_g": 10.7,
    "salt_g": 0.87,
    "sat_fat_g": 0.57,
    "sodium_mg": 348.0,
    "sugar_g": 3.19,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170308",
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
