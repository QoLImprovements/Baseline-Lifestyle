/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-sliced",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-169866",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Frankfurter, meat and poultry, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.4,
    "energy_kcal": 121.0,
    "fat_g": 2.8,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 0.91,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 155.0,
    "potassium_mg": 261.0,
    "protein_g": 15.5,
    "salt_g": 2.4575,
    "sat_fat_g": 0.97,
    "sodium_mg": 983.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169866",
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
