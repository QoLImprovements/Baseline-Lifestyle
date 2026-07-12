/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170768",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 737.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "PIZZA HUT 14\" Sausage Pizza, THIN 'N CRISPY Crust",
  "nutritionPerBasis": {
    "calcium_mg": 193.0,
    "carbs_g": 28.7,
    "energy_kcal": 323.0,
    "fat_g": 16.9,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 2.38,
    "magnesium_mg": 24.0,
    "omega3_g": 0.281,
    "phosphorus_mg": 238.0,
    "potassium_mg": 220.0,
    "protein_g": 14.0,
    "salt_g": 2.0975,
    "sat_fat_g": 6.7,
    "sodium_mg": 839.0,
    "sugar_g": 2.62,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170768",
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
