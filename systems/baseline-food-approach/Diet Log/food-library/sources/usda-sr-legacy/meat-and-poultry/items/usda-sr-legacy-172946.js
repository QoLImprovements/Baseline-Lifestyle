/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-1-slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172946",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving-1-slice",
      "kind": "unit",
      "label": "serving (1 slice)"
    }
  ],
  "name": "Oscar Mayer, Ham (chopped with natural juice)",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 3.65,
    "energy_kcal": 754.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.3,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 219.0,
    "potassium_mg": 260.0,
    "protein_g": 16.3,
    "salt_g": 3.125,
    "sat_fat_g": 4.06,
    "sodium_mg": 1250.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172946",
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
