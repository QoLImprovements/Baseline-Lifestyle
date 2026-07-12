/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-pieces",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-168092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    }
  ],
  "name": "Ham, turkey, sliced, extra lean, prepackaged or deli",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.93,
    "energy_kcal": 562.0,
    "fat_g": 5.8,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.35,
    "magnesium_mg": 20.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 304.0,
    "potassium_mg": 299.0,
    "protein_g": 19.6,
    "salt_g": 2.6,
    "sat_fat_g": 0.5,
    "sodium_mg": 1040.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168092",
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
