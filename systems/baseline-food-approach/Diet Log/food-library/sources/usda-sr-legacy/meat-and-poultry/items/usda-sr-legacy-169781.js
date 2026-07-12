/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "biscuit",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    },
    {
      "gramsPerUnit": 526.0,
      "key": "box",
      "kind": "unit",
      "label": "box"
    }
  ],
  "name": "Sausage, egg and cheese breakfast biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 21.6,
    "energy_kcal": 324.0,
    "fat_g": 22.1,
    "fibre_g": 2.0,
    "folate_ug": 52.0,
    "iron_mg": 1.85,
    "magnesium_mg": 16.0,
    "omega3_g": 0.206,
    "phosphorus_mg": 298.0,
    "potassium_mg": 269.0,
    "protein_g": 9.54,
    "salt_g": 1.4775,
    "sat_fat_g": 8.6,
    "sodium_mg": 591.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 176.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169781",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
