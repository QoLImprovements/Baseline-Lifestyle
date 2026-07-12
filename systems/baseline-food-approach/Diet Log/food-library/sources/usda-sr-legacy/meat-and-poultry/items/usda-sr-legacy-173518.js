/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-nfs",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    }
  ],
  "name": "Babyfood, carrots and beef, strained",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 5.7,
    "energy_kcal": 247.0,
    "fat_g": 2.5,
    "fibre_g": 2.6,
    "folate_ug": 17.0,
    "iron_mg": 0.5,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 226.0,
    "protein_g": 3.4,
    "salt_g": 0.1725,
    "sat_fat_g": 0.96,
    "sodium_mg": 69.0,
    "sugar_g": 2.04,
    "vitamin_a_ug": 723.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173518",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
