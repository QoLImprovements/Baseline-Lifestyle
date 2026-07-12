/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171622",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    }
  ],
  "name": "Bratwurst, pork, beef, link",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 2.98,
    "energy_kcal": 1350.0,
    "fat_g": 27.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.03,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 281.0,
    "protein_g": 14.3,
    "salt_g": 2.775,
    "sat_fat_g": 9.93,
    "sodium_mg": 1110.0,
    "sugar_g": 2.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171622",
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
