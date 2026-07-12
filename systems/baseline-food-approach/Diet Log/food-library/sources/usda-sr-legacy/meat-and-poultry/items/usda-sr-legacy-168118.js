/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-thick",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-168118",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "slice-thick",
      "kind": "unit",
      "label": "slice, thick"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-medium",
      "kind": "unit",
      "label": "slice, medium"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    }
  ],
  "name": "Beef, bologna, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.0,
    "energy_kcal": 310.0,
    "fat_g": 28.4,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.4,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 155.0,
    "protein_g": 11.7,
    "salt_g": 1.705,
    "sat_fat_g": 11.7,
    "sodium_mg": 682.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168118",
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
