/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sausage, turkey, reduced fat, brown and serve, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 10.9,
    "energy_kcal": 855.0,
    "fat_g": 10.3,
    "fibre_g": 0.3,
    "folate_ug": 23.0,
    "iron_mg": 1.8,
    "magnesium_mg": 21.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 164.0,
    "potassium_mg": 207.0,
    "protein_g": 17.0,
    "salt_g": 1.8025,
    "sat_fat_g": 2.87,
    "sodium_mg": 721.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174580",
  "state": "Cooked",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
