/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172947",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "serving-3-slices",
      "kind": "unit",
      "label": "serving 3 slices"
    }
  ],
  "name": "Oscar Mayer, Salami (hard)",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 1.6,
    "energy_kcal": 368.0,
    "fat_g": 28.7,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.83,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 356.0,
    "protein_g": 25.9,
    "salt_g": 4.95,
    "sat_fat_g": 11.1,
    "sodium_mg": 1980.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172947",
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
