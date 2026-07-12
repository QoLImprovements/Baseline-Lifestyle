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
  "id": "usda-sr-legacy-174572",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "cup-wafer-slices-or-shaved",
      "kind": "unit",
      "label": "cup wafer slices or shaved"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-nfs",
      "kind": "unit",
      "label": "slice NFS"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    }
  ],
  "name": "Turkey breast, low salt, prepackaged or deli, luncheon meat",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 3.51,
    "energy_kcal": 455.0,
    "fat_g": 0.83,
    "fibre_g": 0.5,
    "folate_ug": 4.0,
    "iron_mg": 0.63,
    "magnesium_mg": 21.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 162.0,
    "potassium_mg": 211.0,
    "protein_g": 21.8,
    "salt_g": 1.93,
    "sat_fat_g": 0.197,
    "sodium_mg": 772.0,
    "sugar_g": 3.51,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174572",
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
