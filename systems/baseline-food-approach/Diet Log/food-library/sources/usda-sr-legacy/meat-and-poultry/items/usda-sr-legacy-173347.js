/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173347",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "0-33-cup",
      "kind": "unit",
      "label": "0.33 cup"
    }
  ],
  "name": "RICE-A-RONI, chicken flavor, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 76.1,
    "energy_kcal": 1490.0,
    "fat_g": 1.04,
    "fibre_g": 1.2,
    "folate_ug": 26.0,
    "iron_mg": 2.77,
    "magnesium_mg": 31.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 126.0,
    "potassium_mg": 153.0,
    "protein_g": 10.6,
    "salt_g": 2.21,
    "sat_fat_g": 0.389,
    "sodium_mg": 884.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173347",
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
