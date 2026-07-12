/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170365",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1017.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, sausage topping, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 30.4,
    "energy_kcal": 1180.0,
    "fat_g": 12.9,
    "fibre_g": 2.3,
    "folate_ug": 98.0,
    "iron_mg": 2.45,
    "magnesium_mg": 23.0,
    "omega3_g": 0.31,
    "phosphorus_mg": 193.0,
    "potassium_mg": 190.0,
    "protein_g": 11.1,
    "salt_g": 1.5925,
    "sat_fat_g": 4.8,
    "sodium_mg": 637.0,
    "sugar_g": 2.82,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 11.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170365",
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
