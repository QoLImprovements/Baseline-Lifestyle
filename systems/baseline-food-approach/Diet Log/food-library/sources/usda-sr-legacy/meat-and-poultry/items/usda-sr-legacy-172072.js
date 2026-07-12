/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-11-3-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 319.0,
      "key": "item-11-3-oz",
      "kind": "unit",
      "label": "item 11.3 oz"
    }
  ],
  "name": "McDONALD'S Bacon Ranch Salad with Crispy Chicken",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 6.08,
    "energy_kcal": 512.0,
    "fat_g": 6.3,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.61,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 8.82,
    "salt_g": 0.6825,
    "sat_fat_g": 1.62,
    "sodium_mg": 273.0,
    "sugar_g": 1.53,
    "vitamin_a_ug": 2480.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172072",
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
