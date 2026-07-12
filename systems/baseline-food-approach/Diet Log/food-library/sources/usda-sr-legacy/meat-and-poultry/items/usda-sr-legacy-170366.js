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
  "id": "usda-sr-legacy-170366",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 670.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, sausage topping, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 213.0,
    "carbs_g": 27.0,
    "energy_kcal": 321.0,
    "fat_g": 17.7,
    "fibre_g": 2.5,
    "folate_ug": 86.0,
    "iron_mg": 1.73,
    "magnesium_mg": 25.0,
    "omega3_g": 0.377,
    "phosphorus_mg": 254.0,
    "potassium_mg": 225.0,
    "protein_g": 13.4,
    "salt_g": 1.955,
    "sat_fat_g": 6.89,
    "sodium_mg": 782.0,
    "sugar_g": 3.02,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170366",
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
