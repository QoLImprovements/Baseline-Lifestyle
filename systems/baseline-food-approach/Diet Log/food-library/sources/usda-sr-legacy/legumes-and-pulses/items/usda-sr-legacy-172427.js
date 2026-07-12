/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "oz-dry-yield-after-cooking",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172427",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "oz-dry-yield-after-cooking",
      "kind": "unit",
      "label": "oz dry, yield after cooking"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Mungo beans, mature seeds, cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 18.3,
    "energy_kcal": 439.0,
    "fat_g": 0.55,
    "fibre_g": 6.4,
    "folate_ug": 94.0,
    "iron_mg": 1.75,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 156.0,
    "potassium_mg": 231.0,
    "protein_g": 7.54,
    "salt_g": 0.0175,
    "sat_fat_g": 0.038,
    "sodium_mg": 7.0,
    "sugar_g": 2.01,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172427",
  "state": "Boiled",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "boiled",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
