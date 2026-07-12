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
  "id": "usda-sr-legacy-170367",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 932.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, sausage topping, regular crust",
  "nutritionPerBasis": {
    "calcium_mg": 144.0,
    "carbs_g": 30.6,
    "energy_kcal": 1170.0,
    "fat_g": 12.4,
    "fibre_g": 2.3,
    "folate_ug": 88.0,
    "iron_mg": 2.41,
    "magnesium_mg": 24.0,
    "omega3_g": 0.199,
    "phosphorus_mg": 193.0,
    "potassium_mg": 197.0,
    "protein_g": 11.5,
    "salt_g": 1.5825,
    "sat_fat_g": 5.03,
    "sodium_mg": 633.0,
    "sugar_g": 3.32,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170367",
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
