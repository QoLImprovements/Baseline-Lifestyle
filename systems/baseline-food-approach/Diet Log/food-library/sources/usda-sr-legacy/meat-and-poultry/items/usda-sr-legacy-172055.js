/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "pie",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172055",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1168.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, meat and vegetable topping, regular crust",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 25.4,
    "energy_kcal": 1020.0,
    "fat_g": 10.9,
    "fibre_g": 2.2,
    "folate_ug": 62.0,
    "iron_mg": 1.86,
    "magnesium_mg": 23.0,
    "omega3_g": 0.138,
    "phosphorus_mg": 183.0,
    "potassium_mg": 184.0,
    "protein_g": 11.0,
    "salt_g": 1.4725,
    "sat_fat_g": 4.41,
    "sodium_mg": 589.0,
    "sugar_g": 3.73,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172055",
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
