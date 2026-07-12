/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173901",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "3-tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "3 tbsp (1 NLEA serving)"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals, CREAM OF WHEAT, regular, 10 minute cooking, dry",
  "nutritionPerBasis": {
    "calcium_mg": 606.0,
    "carbs_g": 76.5,
    "energy_kcal": 370.0,
    "fat_g": 1.5,
    "fibre_g": 3.8,
    "folate_ug": 121.0,
    "iron_mg": 28.6,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 120.0,
    "protein_g": 10.5,
    "salt_g": 0.0175,
    "sat_fat_g": 0.238,
    "sodium_mg": 7.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173901",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
