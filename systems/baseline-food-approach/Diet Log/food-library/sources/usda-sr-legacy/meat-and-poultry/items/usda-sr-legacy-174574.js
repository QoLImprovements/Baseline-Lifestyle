/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-52-slices",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174574",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "3-52-slices",
      "kind": "unit",
      "label": "3.52 slices"
    }
  ],
  "name": "Peppered loaf, pork, beef",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 4.53,
    "energy_kcal": 149.0,
    "fat_g": 6.37,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.07,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 394.0,
    "protein_g": 17.3,
    "salt_g": 1.83,
    "sat_fat_g": 2.28,
    "sodium_mg": 732.0,
    "sugar_g": 4.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174574",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
