/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174575",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pepperoni, beef and pork, sliced",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 1.18,
    "energy_kcal": 2110.0,
    "fat_g": 46.3,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.33,
    "magnesium_mg": 18.0,
    "omega3_g": 0.192,
    "phosphorus_mg": 158.0,
    "potassium_mg": 274.0,
    "protein_g": 19.2,
    "salt_g": 3.95,
    "sat_fat_g": 17.7,
    "sodium_mg": 1580.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174575",
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
