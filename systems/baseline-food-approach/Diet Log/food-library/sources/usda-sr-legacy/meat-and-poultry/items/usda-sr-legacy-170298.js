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
  "id": "usda-sr-legacy-170298",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 381.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    }
  ],
  "name": "Fast foods, submarine sandwich, roast beef on white bread with lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 164.0,
    "carbs_g": 20.3,
    "energy_kcal": 156.0,
    "fat_g": 2.73,
    "fibre_g": 0.7,
    "folate_ug": 67.0,
    "iron_mg": 2.09,
    "magnesium_mg": 20.0,
    "omega3_g": 0.074,
    "phosphorus_mg": 118.0,
    "potassium_mg": 188.0,
    "protein_g": 12.2,
    "salt_g": 0.8225,
    "sat_fat_g": 0.972,
    "sodium_mg": 329.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170298",
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
