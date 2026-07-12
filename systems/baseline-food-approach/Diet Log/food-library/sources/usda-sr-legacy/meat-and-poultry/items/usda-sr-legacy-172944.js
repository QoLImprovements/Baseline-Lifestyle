/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172944",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving-1-slice",
      "kind": "unit",
      "label": "serving (1 slice)"
    }
  ],
  "name": "Oscar Mayer, Braunschweiger Liver Sausage (sliced)",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 2.6,
    "energy_kcal": 1390.0,
    "fat_g": 29.4,
    "fibre_g": 0.2,
    "folate_ug": 47.0,
    "iron_mg": 10.5,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 199.0,
    "potassium_mg": 202.0,
    "protein_g": 14.2,
    "salt_g": 2.9,
    "sat_fat_g": 10.9,
    "sodium_mg": 1160.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 4720.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172944",
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
