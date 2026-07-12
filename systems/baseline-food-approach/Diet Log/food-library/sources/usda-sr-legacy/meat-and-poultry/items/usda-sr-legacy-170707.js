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
  "id": "usda-sr-legacy-170707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    },
    {
      "gramsPerUnit": 368.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    }
  ],
  "name": "Fast foods, submarine sandwich, ham on white bread with lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 169.0,
    "carbs_g": 22.9,
    "energy_kcal": 151.0,
    "fat_g": 2.53,
    "fibre_g": 1.3,
    "folate_ug": 72.0,
    "iron_mg": 1.78,
    "magnesium_mg": 20.0,
    "omega3_g": 0.063,
    "phosphorus_mg": 116.0,
    "potassium_mg": 367.0,
    "protein_g": 9.12,
    "salt_g": 0.99,
    "sat_fat_g": 0.626,
    "sodium_mg": 396.0,
    "sugar_g": 3.54,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170707",
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
